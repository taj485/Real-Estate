using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Real_Estate_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Conventry", "Rugby", "London", "Manchester"};
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "Rugby";
        }
    }
}
