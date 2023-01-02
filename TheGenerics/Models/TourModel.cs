using TheGenericsData.Entities;

namespace TheGenerics.Models
{
    public class TourModel
    {
        public int TourId { get; set; }
        public DateTime TourDate { get; set; }
        public string TourLocation { get; set; }
        public string TourArena { get; set; }
        public bool TourTicketBought { get; set; }

        public TourModel(TourEntity tour, bool isBought = false)
        {
            this.TourId = tour.Id;
            this.TourDate = tour.TourDate;
            this.TourLocation = tour.TourLocation;
            this.TourArena = tour.TourArena;
            this.TourTicketBought = isBought;
        }

        public TourModel(int tourId, DateTime tourDate, string tourLocation, string tourArena, bool isBought = false)
        {
            this.TourId = tourId;
            this.TourDate = tourDate;
            this.TourLocation = tourLocation;
            this.TourArena = tourArena;
            this.TourTicketBought = isBought;
        }
    }
}
