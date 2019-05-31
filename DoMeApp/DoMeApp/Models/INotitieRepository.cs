using System.Collections.Generic;

namespace DoMeApp.Models
{
    public interface INotitieRepository
    {
        Notitie GetBy(int id);
        bool TryGetNotitie(int id, Notitie notitie);
        IEnumerable<Notitie> GetAll();
        void Add(Notitie notitie);
        void Delete(Notitie notitie);
        void Update(Notitie notitie);
        void SaveChanges();
    }
}
