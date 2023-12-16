using BackEnd.Helpers;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;

namespace BackEnd.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly BOOKSTOREContext _context;

    public UsersController(BOOKSTOREContext context)
    {
      _context = context;
    }

  

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User userObj)
    {
      if(userObj  == null)
      {
        return BadRequest();
      }

      var user = await _context.Users
        .FirstOrDefaultAsync(x => x.Email == userObj.Email);
      if (user == null)
      {
        return NotFound(new { Message = "User Not Found" });
      }
      if(!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
      {
        return BadRequest(new { Message = "Password is Incorrect" });
      }

      user.Token = CreateJwt(user);

      return Ok(new
      {
        Token = user.Token,
        Message = " Login Success"
      });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User userObj)
    {
      if (userObj == null)
      {
        return BadRequest();
      }

      //Check username
      if(await CheckUserNameExistAsync(userObj.UserName))
      {
        return BadRequest(new {Message = "Username Already Exist"});
      }

      //Check email
      if(await CheckEmailExistAsync(userObj.Email))
      {
        return BadRequest(new { Message = "Email Already Exist" });
      }

      //Check password strength
      var pass = CheckPasswordStrength(userObj.Password);
      if (!string.IsNullOrEmpty(pass))
      {
        return BadRequest(new
        {
          Message = pass.ToString()
        });
      }

      userObj.Password = PasswordHasher.HashPassword(userObj.Password);
      userObj.Role = "User";
      userObj.Token = "";
      await _context.Users.AddAsync(userObj);
      await _context.SaveChangesAsync();

      return Ok(new { Message = "User Registered!" });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound();
      }

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private Task<bool> CheckUserNameExistAsync(string username)
      => _context.Users.AnyAsync(x => x.UserName == username);

    private Task<bool> CheckEmailExistAsync(string email)
      => _context.Users.AnyAsync(x => x.Email == email);

    private string CheckPasswordStrength(string password)
    {
      StringBuilder sb = new StringBuilder();
      if (password.Length < 8)
      {
        sb.Append("Minimum password length should be 8" + Environment.NewLine);
      }
      if (!(Regex.IsMatch(password, "[a-z]") && Regex.IsMatch(password, "[A-Z]")
        && Regex.IsMatch(password, "[0-9]")))
      {
        sb.Append("Password should be Aphanumeric" + Environment.NewLine);
      }
      if (!Regex.IsMatch(password, "[<,>,@,!,#,$,%,^,&,*,(,),_,+,\\[,\\],{,},?,:,;,|,',\\,.,/,~,`,-,=]"))
      {
        sb.Append("Password should contain special chars" + Environment.NewLine);
      }
      return sb.ToString();
    }

    private string CreateJwt(User user)
    {
      var jwtTokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes("verysecret...............");
      var identity = new ClaimsIdentity(new Claim[]
      {
        new Claim(ClaimTypes.Role, user.Role),
        new Claim(ClaimTypes.Name, $"{user.UserName}")
      });

      var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = identity,
        Expires = DateTime.Now.AddDays(1),
        SigningCredentials = credentials
      };

      var token = jwtTokenHandler.CreateToken(tokenDescriptor);
      return jwtTokenHandler.WriteToken(token);
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<User>> GetUsers()
    {
      return Ok(await _context.Users.ToListAsync());
    }
  }

}
