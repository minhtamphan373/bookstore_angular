using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class Comment
    {
        public int Id { get; set; }
        public string NoiDung { get; set; }
        public int? IdSach { get; set; }
        public int? IdUser { get; set; }
        public DateTime? NgayDang { get; set; }

        public virtual Sach IdSachNavigation { get; set; }
        public virtual User IdUserNavigation { get; set; }
    }
}
