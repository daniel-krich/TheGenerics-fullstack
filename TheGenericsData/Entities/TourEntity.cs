using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheGenericsData.Entities
{
    public class TourEntity : BaseEntity
    {
#nullable disable
        [Required]
        public DateTime TourDate { get; set; }

        [Required, MaxLength(80)]
        public string TourLocation { get; set; }

        [Required, MaxLength(80)]
        public string TourArena { get; set; }
    }
}
