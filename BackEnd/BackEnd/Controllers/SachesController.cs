using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Models;
using System.Net;
using Microsoft.AspNetCore.StaticFiles;
using static System.Reflection.Metadata.BlobBuilder;

namespace BackEnd.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SachesController : ControllerBase
  {
    private readonly BOOKSTOREContext _context;
    private readonly IWebHostEnvironment environment;
    private readonly HttpClient _httpClient;
    private IHttpContextAccessor httpContextAccessor;
    public SachesController(BOOKSTOREContext context, IWebHostEnvironment _environment, IHttpContextAccessor _httpContextAccessor, IHttpClientFactory httpClientFactory)
    {
      this._context = context;
      this.environment = _environment;
      this.httpContextAccessor = _httpContextAccessor;
      _httpClient = httpClientFactory.CreateClient();
    }

    // GET: api/Saches
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Sach>>> GetSaches()
    {
      if (_context.Saches == null)
      {
        return NotFound();
      }
      return await _context.Saches.ToListAsync();
    }

    // GET: api/Saches/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Sach>> GetSach(int id)
    {
      if (_context.Saches == null)
      {
        return NotFound();
      }
      var sach = await _context.Saches.FindAsync(id);

      if (sach == null)
      {
        return NotFound();
      }
      return sach;
    }

    [HttpGet("(search)")]
    public async Task<ActionResult<IEnumerable<Sach>>> SearchProducts(string keyword)
    {
      var sach = await _context.Saches
          .Where(p => p.TenSach.Contains(keyword))
          .ToListAsync();

      return Ok(sach);
    }


    // PUT: api/Saches/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSach(int id, Sach sach)
    {
      if (id != sach.Id)
      {
        return BadRequest();
      }

      _context.Entry(sach).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SachExists(id))
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

    // POST: api/Saches
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

    [HttpPost]
    public async Task<ActionResult<Sach>> PostSach([FromForm] SachRequest sachRequest)
    {
      try
      {
        var sach = new Sach { Id = sachRequest.Id, TenSach = sachRequest.TenSach, TacGia = sachRequest.TacGia, SoTrang = sachRequest.SoTrang, TomTat = sachRequest.TomTat, IdTheLoai = sachRequest.IdTheLoai };

        //xử lý file img
        if (sachRequest.HinhAnh == null || sachRequest.HinhAnh.Length == 0)
        {
          return BadRequest("No file uploaded.");
        }
        var imgFolder = Path.Combine(environment.WebRootPath, "Images"); // Đường dẫn thư mục để lưu trữ tệp
        var imgName = sachRequest.HinhAnh.FileName;
        var imgPath = Path.Combine(imgFolder, imgName);

        if (!Directory.Exists(imgFolder))
        {
          Directory.CreateDirectory(imgFolder); // Tạo thư mục nếu chưa tồn tại
        }

        using (var stream = new FileStream(imgPath, FileMode.Create))
        {
          await sachRequest.HinhAnh.CopyToAsync(stream); // Lưu tệp vào đường dẫn
        }
        var baseURL = httpContextAccessor.HttpContext.Request.Scheme + "://" + httpContextAccessor.HttpContext.Request.Host + httpContextAccessor.HttpContext.Request.PathBase;
        sach.HinhAnh = baseURL + "/Images/" + sachRequest.HinhAnh.FileName;

        //xử lý file pdf
        if (sachRequest.PdfFile == null || sachRequest.PdfFile.Length == 0)
        {
          return BadRequest("No file uploaded.");
        }

        var pdfFolder = Path.Combine(environment.WebRootPath, "Pdfs"); // Đường dẫn thư mục để lưu trữ tệp
        var pdfName = sachRequest.PdfFile.FileName;
        var pdfPath = Path.Combine(pdfFolder, pdfName);

        if (!Directory.Exists(pdfFolder))
        {
          Directory.CreateDirectory(pdfFolder); // Tạo thư mục nếu chưa tồn tại
        }

        using (var stream = new FileStream(pdfPath, FileMode.Create))
        {
          await sachRequest.PdfFile.CopyToAsync(stream); // Lưu tệp vào đường dẫn
        }

        sach.PdfFile = baseURL + "/Pdfs/" + sachRequest.PdfFile.FileName;

        _context.Saches.Add(sach);
        await _context.SaveChangesAsync();
        return Ok(sach);
      }
      catch
      {
        return BadRequest();
      }
    }

    // DELETE: api/Saches/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSach(int id)
    {
      if (_context.Saches == null)
      {
        return NotFound();
      }
      var sach = await _context.Saches.FindAsync(id);
      if (sach == null)
      {
        return NotFound();
      }

      _context.Saches.Remove(sach);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    [HttpGet("download-pdf/{id}")]
    public async Task<IActionResult> DownloadPdf(int id)
    {
      var sach = await _context.Saches.FindAsync(id);

      if (sach == null)
      {
        return NotFound();
      }
      var filePath = Path.Combine(environment.WebRootPath, "Pdfs", sach.PdfFile);
      var fileName = filePath.Substring(filePath.LastIndexOf('/') + 1);
      var fullPath = "wwwroot/Pdfs/" + fileName;
      var provider = new FileExtensionContentTypeProvider();
      if (!provider.TryGetContentType(fullPath, out var contentType))
      {
        contentType = "application/octet-stream";
      }
      var bytes = await System.IO.File.ReadAllBytesAsync(fullPath);
      return File(bytes, contentType, Path.GetFileName(fullPath));
    }
    private bool SachExists(int id)
    {
      return (_context.Saches?.Any(e => e.Id == id)).GetValueOrDefault();
    }



    //lấy ds sách theo id thể loại
    [HttpGet("books-id-category/{idTheLoai}")]
    public IActionResult GetAllSachByIDTheLoai(int idTheLoai)
    {
      var result = _context.Saches.Where(b => b.IdTheLoai == idTheLoai)
        .ToList();
      return Ok(result);
    }

    [HttpGet("{idSach}/ten-the-loai-sach")]
    public IActionResult GetTenTheLoaiByIDSach(int idSach)
    {
      try
      {
        var sach = _context.Saches.FirstOrDefault(s => s.Id == idSach);
        if(sach == null)
        {
          return NotFound();
        }

        var theloai = _context.TheLoais.FirstOrDefault(t => t.Id == sach.IdTheLoai);
        if(theloai == null)
        {
          return NotFound();
        }
        var tenTheLoai = theloai.TenTheLoai;

        return Ok(tenTheLoai);
      }
      catch
      {
        return BadRequest();
      }
    }
    [HttpGet("totalSachs")]
    public IActionResult GetTotalBooks()
    {
      int totalBooks = _context.Saches.Count();
      return Ok(totalBooks);
    }



  }
}
