using System;
using System.ComponentModel.DataAnnotations;

namespace DoMeApp.DTOs
{
    public class NotitieDTO
    {
        [Required]
        public string Title{ get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public string Owner { get; set; }
    }
}
