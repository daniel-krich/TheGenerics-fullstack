using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheGenericsData.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TourLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TourArena = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tours", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Tours",
                columns: new[] { "Id", "TourArena", "TourDate", "TourLocation" },
                values: new object[,]
                {
                    { 1, "BARCLAYS CENTER", new DateTime(2022, 11, 25, 20, 40, 0, 0, DateTimeKind.Unspecified), "NYC, NY" },
                    { 2, "DTE ENERGY MUSIC THEATRE", new DateTime(2022, 11, 30, 20, 40, 0, 0, DateTimeKind.Unspecified), "DETROIT, MI" },
                    { 3, "BUDWEISER STAGE", new DateTime(2023, 1, 5, 20, 40, 0, 0, DateTimeKind.Unspecified), "TORONTO, ON" },
                    { 4, "JIGGY LUBE LIVE", new DateTime(2023, 1, 10, 20, 40, 0, 0, DateTimeKind.Unspecified), "BRISTOW, VA" },
                    { 5, "AK-CHIN PAVILION", new DateTime(2023, 1, 15, 20, 40, 0, 0, DateTimeKind.Unspecified), "PHOENIX, AZ" },
                    { 6, "T-MOBILE ARENA", new DateTime(2023, 1, 25, 20, 40, 0, 0, DateTimeKind.Unspecified), "LAS VEGAS, NV" },
                    { 7, "CONCORD PAVILION", new DateTime(2022, 10, 15, 20, 0, 0, 0, DateTimeKind.Unspecified), "CONCORD, CA" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tours");
        }
    }
}
