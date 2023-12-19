using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class Sach
    {
        public Sach()
        {
            Comments = new HashSet<Comment>();
        }

        public string TenSach { get; set; }
        public string TacGia { get; set; }
        public int? SoTrang { get; set; }
        public string HinhAnh { get; set; }
        public string TomTat { get; set; }
        public string PdfFile { get; set; }
        public int? IdTheLoai { get; set; }
        public int Id { get; set; }

        public virtual TheLoai IdTheLoaiNavigation { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
