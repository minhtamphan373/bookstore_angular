using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace bookstoreBackEnd.Models
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

        public virtual DbSet<Sach> Saches { get; set; } = null!;
        public virtual DbSet<SachTheLoai> SachTheLoais { get; set; } = null!;
        public virtual DbSet<TheLoai> TheLoais { get; set; } = null!;
        public virtual DbSet<TrangThaiDoc> TrangThaiDocs { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<YeuThich> YeuThiches { get; set; } = null!;

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

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.HinhAnh).HasMaxLength(50);

                entity.Property(e => e.TacGia).HasMaxLength(50);

                entity.Property(e => e.TheLoai).HasMaxLength(150);

                entity.HasOne(d => d.IdTheLoaiNavigation)
                    .WithMany(p => p.Saches)
                    .HasForeignKey(d => d.IdTheLoai)
                    .HasConstraintName("FK_sach_theloai");
            });

            modelBuilder.Entity<SachTheLoai>(entity =>
            {
                entity.ToTable("Sach_TheLoai");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.IdSach).HasColumnName("id_sach");

                entity.Property(e => e.IdTheloai).HasColumnName("id_theloai");

                entity.HasOne(d => d.IdSachNavigation)
                    .WithMany(p => p.SachTheLoais)
                    .HasForeignKey(d => d.IdSach)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_sach_theloai_sach");

                entity.HasOne(d => d.IdTheloaiNavigation)
                    .WithMany(p => p.SachTheLoais)
                    .HasForeignKey(d => d.IdTheloai)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_sach_theloai_theloai");
            });

            modelBuilder.Entity<TheLoai>(entity =>
            {
                entity.ToTable("TheLoai");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.TheLoai1)
                    .HasMaxLength(150)
                    .HasColumnName("TheLoai");
            });

            modelBuilder.Entity<TrangThaiDoc>(entity =>
            {
                entity.ToTable("TrangThaiDoc");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.IdSach).HasColumnName("Id_Sach");

                entity.Property(e => e.IdUser).HasColumnName("Id_User");

                entity.Property(e => e.NgayTao).HasColumnType("datetime");

                entity.Property(e => e.TrangThaiDoc1)
                    .HasMaxLength(150)
                    .HasColumnName("TrangThaiDoc");

                entity.HasOne(d => d.IdSachNavigation)
                    .WithMany(p => p.TrangThaiDocs)
                    .HasForeignKey(d => d.IdSach)
                    .HasConstraintName("FK_trangthaidoc_sach");

                entity.HasOne(d => d.IdSach1)
                    .WithMany(p => p.TrangThaiDocs)
                    .HasForeignKey(d => d.IdSach)
                    .HasConstraintName("FK_trangthaidoc_users");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("User_Type");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<YeuThich>(entity =>
            {
                entity.ToTable("YeuThich");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.IdSach).HasColumnName("Id_Sach");

                entity.Property(e => e.IdUser).HasColumnName("Id_User");

                entity.Property(e => e.NgayTao).HasColumnType("datetime");

                entity.HasOne(d => d.IdSachNavigation)
                    .WithMany(p => p.YeuThiches)
                    .HasForeignKey(d => d.IdSach)
                    .HasConstraintName("FK_yeuthich_sach");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.YeuThiches)
                    .HasForeignKey(d => d.IdUser)
                    .HasConstraintName("FK_yeuthich_users");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
