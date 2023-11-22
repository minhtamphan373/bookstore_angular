namespace BackEnd.Models
{
  public class SachRequest
  {
    public int Id { get; set; }
    public string? TenSach { get; set; }
    public string? TacGia { get; set; }
    public int? SoTrang { get; set; }
    public IFormFile HinhAnh { get; set; }
    public string? TomTat { get; set; }
    public IFormFile PdfFile { get; set; }
    public int? IdTheLoai { get; set; }
  }
}
