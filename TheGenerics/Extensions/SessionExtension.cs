using System.Text.Json;

namespace TheGenerics.Extensions
{
    public static class SessionExtension
    {
        public static void Set<T>(this ISession session, string key, T value)
        {
            session.SetString(key, JsonSerializer.Serialize(value));
        }

        public static T? Get<T>(this ISession session, string key)
        {
            if(session.GetString(key) is string value)       
                return JsonSerializer.Deserialize<T>(value);

            return default;
        }

        public static void UseSessionWithInit(this WebApplication webApplication)
        {
            webApplication.UseSession();
            webApplication.Use((context, next) =>
            {
                context.Session.Set("", '\0');
                return next();
            });
        }
    }
}
