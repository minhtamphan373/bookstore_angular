using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class TheLoai
    {
        public TheLoai()
        {
            SachTheLoais = new HashSet<SachTheLoai>();
            Saches = new HashSet<Sach>();
        }

        public int Id { get; set; }
        public string? TheLoai1 { get; set; }

        public virtual ICollection<SachTheLoai> SachTheLoais { get; set; }
        public virtual ICollection<Sach> Saches { get; set; }
    }
}
