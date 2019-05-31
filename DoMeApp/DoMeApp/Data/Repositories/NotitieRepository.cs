using System;
using System.Collections.Generic;
using System.Linq;
using DoMeApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DoMeApp.Data.Repositories
{
    public class NotitieRepository: INotitieRepository
    {

        private readonly ApplicationDbContext _context;
        private readonly DbSet<Notitie> _notities;

        public NotitieRepository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
            _notities = dbContext.Notities;
        }

        public IEnumerable<Notitie> GetAll()
        {
            return _notities.ToList();
        }

        public Notitie GetBy(int id)
        {
            return _notities.FirstOrDefault(t => t.Id == id);
        }

        public bool TryGetNotitie(int id, Notitie notitie)
        {
            notitie = _context.Notities.FirstOrDefault(t => t.Id == id);
            return notitie != null;
        }

        public void Add(Notitie notitie)
        {
            _context.Add(notitie);
        }

        public void Update(Notitie notitie)
        {
            _context.Update(notitie);
        }

        public void Delete(Notitie notitie)
        {
            _context.Remove(notitie);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
