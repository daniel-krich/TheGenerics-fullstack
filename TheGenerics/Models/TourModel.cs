namespace TheGenerics.Models
{
    public class TourModel
    {
        public DateTime TourDate { get; set; }
        public string TourLocation { get; set; }
        public string TourArena { get; set; }

        public TourModel(DateTime tourDate, string tourLocation, string tourArena)
        {
            this.TourDate = tourDate;
            this.TourLocation = tourLocation;
            this.TourArena = tourArena;
        }
    }
}
