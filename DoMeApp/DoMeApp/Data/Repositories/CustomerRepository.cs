using Microsoft.EntityFrameworkCore;
using DoMeApp.Models;
using System.Linq;

namespace DoMeApp.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        public Customer GetBy(string email)
        {
            return _customers.SingleOrDefault(c=>c.Email== email);
        }

        public void Add(Customer  customer)
        {
            _customers.Add(customer);
        }

         public void SaveChanges()
        {
            _context.SaveChanges();
        }
     }
}
