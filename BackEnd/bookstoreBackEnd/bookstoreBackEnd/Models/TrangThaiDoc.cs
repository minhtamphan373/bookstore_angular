using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class TrangThaiDoc
    {
        public int Id { get; set; }
        public int? IdUser { get; set; }
        public int? IdSach { get; set; }
        public string? TrangThaiDoc1 { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual User? IdSach1 { get; set; }
        public virtual Sach? IdSachNavigation { get; set; }
    }
}
