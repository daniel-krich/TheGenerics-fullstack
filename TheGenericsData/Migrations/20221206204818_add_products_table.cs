using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheGenericsData.Migrations
{
    public partial class add_products_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TourLocation",
                table: "Tours",
                type: "nvarchar(80)",
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "TourArena",
                table: "Tours",
                type: "nvarchar(80)",
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
                    ImageLink = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    Category = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "ImageLink", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 0, "https://i.scdn.co/image/ab67616d00001e0288ab3299f404a55abea86bc9", "Album 1", 13.99f },
                    { 2, 0, "https://e.snmc.io/i/300/s/74b739c5972c2a02ca25e930ff11a354/2086821", "Album 2", 13.99f },
                    { 3, 0, "https://upload.wikimedia.org/wikipedia/en/3/30/Genericflipper.jpg", "Album 3", 13.99f },
                    { 4, 0, "https://i.pinimg.com/originals/34/fa/1c/34fa1c26ec5fb251de8231777b9befe2.jpg", "Album 4", 13.99f },
                    { 5, 1, "https://ih1.redbubble.net/image.3807536613.9740/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.jpg", "The Generics Shirt", 19.99f },
                    { 6, 1, "https://www.xonot.com/wp-content/uploads/2019/12/mockup-032717b1.jpg", "The Generics Coffee mug", 24.99f }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.AlterColumn<string>(
                name: "TourLocation",
                table: "Tours",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(80)",
                oldMaxLength: 80);

            migrationBuilder.AlterColumn<string>(
                name: "TourArena",
                table: "Tours",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(80)",
                oldMaxLength: 80);
        }
    }
}
