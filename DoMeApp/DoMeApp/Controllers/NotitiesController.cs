using DoMeApp.DTOs;
using DoMeApp.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoMeApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class NotitiesController : ControllerBase
    {
        private readonly INotitieRepository _notitieRepository;
        private readonly ICustomerRepository _customerRepository;

        public NotitiesController(INotitieRepository notitieRepository, ICustomerRepository customerRepository)
        {
            _notitieRepository = notitieRepository;
            _customerRepository = customerRepository;
        }

        // GET: api/Notities
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Notitie> GetNotities()
        {
            return _notitieRepository.GetAll().OrderBy(r => r.Created);
        }

        // GET: api/Notities/5
        [HttpGet("{id}")]
        public ActionResult<Notitie> GetNotitie(int id)
        {

            Notitie notitie = _notitieRepository.GetBy(id);
            if (notitie == null) return NotFound();
            return notitie;
        }

        // PUT: api/Notities/5
        [HttpPut("{id}")]
        public IActionResult PutNotitie(int id, Notitie notitie)
        {
            if (id != notitie.Id)
            {
                return BadRequest();
            }
            _notitieRepository.Update(notitie);
            _notitieRepository.SaveChanges();
            return Ok();
        }

        // POST: api/Notities
        [HttpPost]
        public ActionResult<Notitie> PostNotitie(NotitieDTO notitie)
        {
            Notitie notitietoCreate = new Notitie() { Title = notitie.Title, Owner = notitie.Owner, Content = notitie.Content};
            _notitieRepository.Add(notitietoCreate);
            _notitieRepository.SaveChanges();

            return CreatedAtAction(nameof(GetNotitie), new { id = notitietoCreate.Id }, notitietoCreate);
        }

        // DELETE: api/Notities/5
        [HttpDelete("{id}")]
        public ActionResult<Notitie> DeleteNotitie(int id)
        {
            Notitie notitie = _notitieRepository.GetBy(id);
            if (notitie == null)
            {
                return NotFound();
            }
            _notitieRepository.Delete(notitie);
            _notitieRepository.SaveChanges();
            return notitie;
        }

        //private bool NotitieExists(int id)
        //{
        //    return _notitieRepository.GetBy(id) != null;
        //}
    }
}