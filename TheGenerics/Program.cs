using TheGenerics.Extensions;
using TheGenerics.Models;
using TheGenerics.Services;
using TheGenericsData.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<CartSessionService>();

builder.Services.AddHttpContextAccessor();

builder.Services.AddDbContextFactory<GenericsDbContext>();

builder.Services.AddSession(x =>
{
    x.Cookie = new CookieBuilder
    {
        Name = "TheGenerics_Session",
        Expiration = TimeSpan.FromHours(12)
    };
});

builder.Services.AddDistributedMemoryCache();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseStaticFiles();

app.UseSessionWithInit();

//app.UseHttpsRedirection();

app.UsePathBase("/api");
app.UseRouting();

app.UseCors("AllowAllPolicy");

app.UseAuthorization();


app.MapControllers();

app.MapFallbackToFile("index.html");


app.Run();
