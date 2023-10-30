using System;
using System.Collections.Generic;

namespace bookstoreBackEnd.Models
{
    public partial class User
    {
        public User()
        {
            TrangThaiDocs = new HashSet<TrangThaiDoc>();
            YeuThiches = new HashSet<YeuThich>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? UserType { get; set; }

        public virtual ICollection<TrangThaiDoc> TrangThaiDocs { get; set; }
        public virtual ICollection<YeuThich> YeuThiches { get; set; }
    }
}
