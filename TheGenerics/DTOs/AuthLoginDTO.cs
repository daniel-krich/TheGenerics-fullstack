using System.ComponentModel.DataAnnotations;

namespace TheGenerics.DTOs
{
    public class AuthLoginDTO
    {
        [Required]
        public string? Username { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
