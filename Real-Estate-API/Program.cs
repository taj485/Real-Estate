using Microsoft.EntityFrameworkCore;
using Real_Estate.Data;
using Serilog;
using Serilog.Sinks.MSSqlServer;

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddDbContext<RealEstateContext>(options =>
//    options.UseSqlServer(builder.Configuration.GetConnectionString("RealEstateDb")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(p => p.AddPolicy("corspolicy", policy =>
{
    policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseCors("corspolicy");


app.UseAuthorization();


app.MapControllers();

Log.Logger = new LoggerConfiguration()
    .WriteTo
    .MSSqlServer(
        connectionString: "Server=(localdb)\\MSSQLLocalDB;Database=RealEstate;Integrated Security=SSPI;",
        sinkOptions: new MSSqlServerSinkOptions { TableName = "EventLogs", AutoCreateSqlTable = true })
    .CreateLogger();

app.Run();


