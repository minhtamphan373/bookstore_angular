using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;
using Microsoft.AspNetCore.Authorization;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheLoaisController : ControllerBase
    {
        private readonly BOOKSTOREContext _context;

        public TheLoaisController(BOOKSTOREContext context)
        {
            _context = context;
        }

        // GET: api/TheLoais
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TheLoai>>> GetTheLoais()
        {
          if (_context.TheLoais == null)
          {
              return NotFound();
          }
            return await _context.TheLoais.ToListAsync();
        }

        // GET: api/TheLoais/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TheLoai>> GetTheLoai(int id)
        {
          if (_context.TheLoais == null)
          {
              return NotFound();
          }
            var theLoai = await _context.TheLoais.FindAsync(id);

            if (theLoai == null)
            {
                return NotFound();
            }

            return theLoai;
        }

        // PUT: api/TheLoais/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTheLoai(int id, TheLoai theLoai)
        {
            if (id != theLoai.Id)
            {
                return BadRequest();
            }

            _context.Entry(theLoai).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TheLoaiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TheLoais
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TheLoai>> PostTheLoai([FromForm] TheLoai theLoai)
        {
          if (_context.TheLoais == null)
          {
              return Problem("Entity set 'BOOKSTOREContext.TheLoais'  is null.");
          }
            _context.TheLoais.Add(theLoai);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TheLoaiExists(theLoai.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTheLoai", new { id = theLoai.Id }, theLoai);
        }

        // DELETE: api/TheLoais/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTheLoai(int id)
        {
            if (_context.TheLoais == null)
            {
                return NotFound();
            }
            var theLoai = await _context.TheLoais.FindAsync(id);
            if (theLoai == null)
            {
                return NotFound();
            }

            _context.TheLoais.Remove(theLoai);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TheLoaiExists(int id)
        {
            return (_context.TheLoais?.Any(e => e.Id == id)).GetValueOrDefault();
        }

  }
}
