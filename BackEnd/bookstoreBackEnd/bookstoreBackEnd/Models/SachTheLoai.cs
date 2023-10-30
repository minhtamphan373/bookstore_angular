using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class SachTheLoai
    {
        public int Id { get; set; }
        public int IdSach { get; set; }
        public int IdTheloai { get; set; }

        public virtual Sach IdSachNavigation { get; set; } = null!;
        public virtual TheLoai IdTheloaiNavigation { get; set; } = null!;
    }
}
