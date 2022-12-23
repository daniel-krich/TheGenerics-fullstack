using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheGenericsData.Enums;

namespace TheGenericsData.Entities
{
    public class ProductEntity : BaseEntity
    {
#nullable disable
        [Required, MaxLength(80)]
        public string Name { get; set; }
        [Required, MaxLength(255)]
        public string ImageLink { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public ProductCategoryEnum Category { get; set; }
    }
}
