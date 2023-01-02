namespace TheGenerics.DTOs
{
    public class UserInfoDTO
    {
        public string Username { get; set; }
        public bool Error { get; set; }

        public UserInfoDTO(string username, bool error = false)
        {
            Username = username;
            Error = error;
        }
    }
}
