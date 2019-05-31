using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using DoMeApp.Models;
using System;

namespace DoMeApp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
            builder.Entity<Notitie>().Property(r => r.Title).IsRequired().HasMaxLength(75);
            //builder.Entity<Notitie>().HasOne(p => p.Owner).WithOne().IsRequired()
            //    .HasForeignKey("CustomerId");

            builder.Entity<Customer>().Property(c => c.LastName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.FirstName).IsRequired().HasMaxLength(50);
            builder.Entity<Customer>().Property(c => c.Email).IsRequired().HasMaxLength(100);

            //Another way to seed the database
            builder.Entity<Notitie>().HasData(
                new Notitie { Id = 1, Title = "First", Content = "De eerste notitie", Created = DateTime.Now, Owner = "student@hogent.be" },
                new Notitie { Id = 2, Title = "Second", Content = "De tweede notitie", Created = DateTime.Now, Owner = "student@hogent.be" }
                );

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Notitie> Notities { get; set; }
    }
}