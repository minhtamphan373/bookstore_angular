using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BackEnd.Models
{
    public partial class BOOKSTOREContext : DbContext
    {
        public BOOKSTOREContext()
        {
        }

        public BOOKSTOREContext(DbContextOptions<BOOKSTOREContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Sach> Saches { get; set; }
        public virtual DbSet<TheLoai> TheLoais { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-AD60VGJJ\\SQLEXPRESS;Initial Catalog=BOOKSTORE;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sach>(entity =>
            {
                entity.ToTable("Sach");

                entity.Property(e => e.HinhAnh).HasMaxLength(200);

                entity.Property(e => e.PdfFile).HasMaxLength(500);

                entity.Property(e => e.TacGia).HasMaxLength(100);

                entity.Property(e => e.TenSach).HasMaxLength(200);
            });

            modelBuilder.Entity<TheLoai>(entity =>
            {
                entity.ToTable("TheLoai");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.TheLoai1)
                    .HasMaxLength(150)
                    .HasColumnName("TheLoai");
            });

      modelBuilder.Entity<User>(entity =>
      {
        entity.ToTable("Users");
      });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}