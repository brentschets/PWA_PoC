using System;
using System.ComponentModel.DataAnnotations;

namespace DoMeApp.Models
{
    public class Notitie
    {
        #region Properties
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public string Owner { get; set; }
        #endregion

        #region Constructor
        public Notitie()
        {
            Created = DateTime.Now;
        }
        #endregion
    }
}
