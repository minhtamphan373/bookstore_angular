using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class TheLoai
    {
        public TheLoai()
        {
            Saches = new HashSet<Sach>();
        }

        public int Id { get; set; }
        public string TenTheLoai { get; set; }

        public virtual ICollection<Sach> Saches { get; set; }
    }
}
