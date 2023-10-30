using bookstoreBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bookstoreBackEnd.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SachController : ControllerBase
  {
    private readonly BOOKSTOREContext _context;
    private readonly IWebHostEnvironment _hostEnvironment;
    public SachController(BOOKSTOREContext ctx, IWebHostEnvironment hostEnvironment)
    {
      _context = ctx;
      this._hostEnvironment = hostEnvironment;
    }

    [HttpGet]
    public async Task<ActionResult<List<Sach>>> GetAllSaches()
    {
      return await _context.Saches
          .Select(x => new Sach()
          {
            Id = x.Id,
            TenSach = x.TenSach,
            TacGia = x.TacGia,
            SoTrang = x.SoTrang,
            HinhAnh = x.HinhAnh,
            TomTat = x.TomTat,
            PdfFile = x.PdfFile,
            TheLoai = x.TheLoai,
            IdTheLoai = x.IdTheLoai,
          })
          .ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Sach>> GetSach(int id)
    {
      var sach = await _context.Saches.FindAsync(id);
      if (sach == null)
      {
        return NotFound();
      }
      return sach;

    }
    [HttpPost]
    public async Task<ActionResult<List<Sach>>> CreateSach([FromForm] Sach sach)
    {
      _context.Saches.Add(sach);
      await _context.SaveChangesAsync();

      return Ok(await _context.Saches.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Sach>>> UpdateSach(Sach sach)
    {
      var dbSach = await _context.Saches.FindAsync(sach.Id);
      if (dbSach == null)
      {
        return BadRequest("Khong tim thay sach");
      }
      dbSach.TenSach = sach.TenSach;
      dbSach.TacGia = sach.TacGia;
      dbSach.SoTrang = sach.SoTrang;
      dbSach.HinhAnh = sach.HinhAnh;
      dbSach.TomTat = sach.TomTat;
      dbSach.PdfFile = sach.PdfFile;
      dbSach.TheLoai = sach.TheLoai;
      dbSach.IdTheLoai = sach.IdTheLoai;

      await _context.SaveChangesAsync();

      return Ok(await _context.Saches.ToListAsync());
    }



    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Sach>>> DeleteSach(int id)
    {
      var dbSach = await _context.Saches.FindAsync(id);
      if (dbSach == null)
      {
        return BadRequest("Khong tim thay sach");
      }
      _context.Saches.Remove(dbSach);
      await _context.SaveChangesAsync();

      return Ok(await _context.Saches.ToListAsync());
    }
  }
}
