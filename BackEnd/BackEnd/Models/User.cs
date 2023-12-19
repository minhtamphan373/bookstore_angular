using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public partial class User
    {
        public User()
        {
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
