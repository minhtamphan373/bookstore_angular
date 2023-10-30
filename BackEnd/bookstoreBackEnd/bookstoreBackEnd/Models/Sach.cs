using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class Sach
    {
        public Sach()
        {
            SachTheLoais = new HashSet<SachTheLoai>();
            TrangThaiDocs = new HashSet<TrangThaiDoc>();
            YeuThiches = new HashSet<YeuThich>();
        }

        public int Id { get; set; }
        public string? TenSach { get; set; }
        public string? TacGia { get; set; }
        public int? SoTrang { get; set; }
        public string? HinhAnh { get; set; }
        public string? TomTat { get; set; }
        public byte[]? PdfFile { get; set; }
        public string? TheLoai { get; set; }
        public int? IdTheLoai { get; set; }

        public virtual TheLoai? IdTheLoaiNavigation { get; set; }
        public virtual ICollection<SachTheLoai> SachTheLoais { get; set; }
        public virtual ICollection<TrangThaiDoc> TrangThaiDocs { get; set; }
        public virtual ICollection<YeuThich> YeuThiches { get; set; }
    }
}
