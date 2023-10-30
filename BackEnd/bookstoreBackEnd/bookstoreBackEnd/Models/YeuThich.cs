using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class YeuThich
    {
        public int Id { get; set; }
        public int? IdUser { get; set; }
        public int? IdSach { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual Sach? IdSachNavigation { get; set; }
        public virtual User? IdUserNavigation { get; set; }
    }
}
