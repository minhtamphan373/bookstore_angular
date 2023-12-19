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

        public virtual DbSet<Comment> Comments { get; set; }
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
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment");

                entity.Property(e => e.NgayDang).HasColumnType("datetime");

                entity.HasOne(d => d.IdSachNavigation)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.IdSach)
                    .HasConstraintName("FK_Comment_Sach1");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.IdUser)
                    .HasConstraintName("FK_Comment_Users");
            });

            modelBuilder.Entity<Sach>(entity =>
            {
                entity.ToTable("Sach");

                entity.Property(e => e.HinhAnh).HasMaxLength(200);

                entity.Property(e => e.PdfFile).HasMaxLength(500);

                entity.Property(e => e.TacGia).HasMaxLength(100);

                entity.Property(e => e.TenSach).HasMaxLength(200);

                entity.HasOne(d => d.IdTheLoaiNavigation)
                    .WithMany(p => p.Saches)
                    .HasForeignKey(d => d.IdTheLoai)
                    .HasConstraintName("FK_Sach_TheLoai");
            });

            modelBuilder.Entity<TheLoai>(entity =>
            {
                entity.ToTable("TheLoai");

                entity.Property(e => e.TenTheLoai).HasMaxLength(150);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
