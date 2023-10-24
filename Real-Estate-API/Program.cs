using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Real_Estate.Data;
using Real_Estate.Data.Entities;
using Serilog;
using Serilog.Sinks.MSSqlServer;

var builder = WebApplication.CreateBuilder(args);

// Responsible for configuring the application's services, such as dependency injection, database 
// connections, and other application services..


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RealEstateDb")));


// IdentityServer is an identity and access management framework that provides authentication 
// and authorization services. This method sets up IdentityServer and its associated services.

builder.Services.AddDefaultIdentity<ApplicationUser>()
    .AddEntityFrameworkStores<AppDbContext>();


builder.Services.AddIdentityServer()
// This method configures IdentityServer to work with ASP.NET Core Identity and Entity Framework
    .AddApiAuthorization<ApplicationUser, AppDbContext>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt();


builder.Services.AddControllers();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", policy =>
{
    policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

//builder.Services.AddDefaultIdentity<ApplicationUser>()
//    .AddEntityFrameworkStores(AppDbContext);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseCors("corspolicy");

app.UseAuthentication();
app.UseAuthorization();
app.UseIdentityServer();

app.MapControllers();

Log.Logger = new LoggerConfiguration()
    .WriteTo
    .MSSqlServer(
        connectionString: "Server=(localdb)\\MSSQLLocalDB;Database=RealEstate;Integrated Security=SSPI;",
        sinkOptions: new MSSqlServerSinkOptions { TableName = "EventLogs", AutoCreateSqlTable = true })
    .CreateLogger();

app.Run();


