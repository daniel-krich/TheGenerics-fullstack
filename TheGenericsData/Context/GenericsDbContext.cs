using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheGenericsData.Entities;
using TheGenericsData.Enums;

namespace TheGenericsData.Context
{
    public class GenericsDbContext : DbContext
    {
#nullable disable
        public DbSet<TourEntity> Tours { get; set; }
        public DbSet<ProductEntity> Products { get; set; }

#nullable enable

        protected readonly IConfiguration Configuration;

        public GenericsDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("GenericsDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ProductEntity>().HasData(
                new ProductEntity
                {
                    Id = 1,
                    Name = "Album 1",
                    ImageLink = "https://i.scdn.co/image/ab67616d00001e0288ab3299f404a55abea86bc9",
                    Price = 13.99f,
                    Category = ProductCategoryEnum.Music
                },
                new ProductEntity
                {
                    Id = 2,
                    Name = "Album 2",
                    ImageLink = "https://e.snmc.io/i/300/s/74b739c5972c2a02ca25e930ff11a354/2086821",
                    Price = 13.99f,
                    Category = ProductCategoryEnum.Music
                },
                new ProductEntity
                {
                    Id = 3,
                    Name = "Album 3",
                    ImageLink = "https://upload.wikimedia.org/wikipedia/en/3/30/Genericflipper.jpg",
                    Price = 13.99f,
                    Category = ProductCategoryEnum.Music
                },
                new ProductEntity
                {
                    Id = 4,
                    Name = "Album 4",
                    ImageLink = "https://i.pinimg.com/originals/34/fa/1c/34fa1c26ec5fb251de8231777b9befe2.jpg",
                    Price = 13.99f,
                    Category = ProductCategoryEnum.Music
                },
                new ProductEntity
                {
                    Id = 5,
                    Name = "The Generics Shirt",
                    ImageLink = "https://ih1.redbubble.net/image.3807536613.9740/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.jpg",
                    Price = 19.99f,
                    Category = ProductCategoryEnum.Merch
                },
                new ProductEntity
                {
                    Id = 6,
                    Name = "The Generics Coffee mug",
                    ImageLink = "https://www.xonot.com/wp-content/uploads/2019/12/mockup-032717b1.jpg",
                    Price = 24.99f,
                    Category = ProductCategoryEnum.Merch
                }
            );

            modelBuilder.Entity<TourEntity>().HasData(
                new TourEntity
                {
                    Id = 1,
                    TourDate = new DateTime(2022, 11, 25, 20, 40, 0),
                    TourLocation = "NYC, NY",
                    TourArena = "BARCLAYS CENTER"
                },
                 new TourEntity
                 {
                     Id = 2,
                     TourDate = new DateTime(2022, 11, 30, 20, 40, 0),
                     TourLocation = "DETROIT, MI",
                     TourArena = "DTE ENERGY MUSIC THEATRE"
                 },
                 new TourEntity
                 {
                     Id = 3,
                     TourDate = new DateTime(2023, 1, 5, 20, 40, 0),
                     TourLocation = "TORONTO, ON",
                     TourArena = "BUDWEISER STAGE"
                 },
                 new TourEntity
                 {
                     Id = 4,
                     TourDate = new DateTime(2023, 1, 10, 20, 40, 0),
                     TourLocation = "BRISTOW, VA",
                     TourArena = "JIGGY LUBE LIVE"
                 },
                 new TourEntity
                 {
                     Id = 5,
                     TourDate = new DateTime(2023, 1, 15, 20, 40, 0),
                     TourLocation = "PHOENIX, AZ",
                     TourArena = "AK-CHIN PAVILION"
                 },
                 new TourEntity
                 {
                     Id = 6,
                     TourDate = new DateTime(2023, 1, 25, 20, 40, 0),
                     TourLocation = "LAS VEGAS, NV",
                     TourArena = "T-MOBILE ARENA"
                 },
                 new TourEntity
                 {
                     Id = 7,
                     TourDate = new DateTime(2022, 10, 15, 20, 0, 0),
                     TourLocation = "CONCORD, CA",
                     TourArena = "CONCORD PAVILION"
                 }
            );
        }
    }
}
