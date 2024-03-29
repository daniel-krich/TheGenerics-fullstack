﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TheGenericsData.Context;

#nullable disable

namespace TheGenericsData.Migrations
{
    [DbContext(typeof(GenericsDbContext))]
    [Migration("20221205185502_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("TheGenericsData.Entities.TourEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("TourArena")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("TourDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("TourLocation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Tours");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            TourArena = "BARCLAYS CENTER",
                            TourDate = new DateTime(2022, 11, 25, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "NYC, NY"
                        },
                        new
                        {
                            Id = 2,
                            TourArena = "DTE ENERGY MUSIC THEATRE",
                            TourDate = new DateTime(2022, 11, 30, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "DETROIT, MI"
                        },
                        new
                        {
                            Id = 3,
                            TourArena = "BUDWEISER STAGE",
                            TourDate = new DateTime(2023, 1, 5, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "TORONTO, ON"
                        },
                        new
                        {
                            Id = 4,
                            TourArena = "JIGGY LUBE LIVE",
                            TourDate = new DateTime(2023, 1, 10, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "BRISTOW, VA"
                        },
                        new
                        {
                            Id = 5,
                            TourArena = "AK-CHIN PAVILION",
                            TourDate = new DateTime(2023, 1, 15, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "PHOENIX, AZ"
                        },
                        new
                        {
                            Id = 6,
                            TourArena = "T-MOBILE ARENA",
                            TourDate = new DateTime(2023, 1, 25, 20, 40, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "LAS VEGAS, NV"
                        },
                        new
                        {
                            Id = 7,
                            TourArena = "CONCORD PAVILION",
                            TourDate = new DateTime(2022, 10, 15, 20, 0, 0, 0, DateTimeKind.Unspecified),
                            TourLocation = "CONCORD, CA"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
