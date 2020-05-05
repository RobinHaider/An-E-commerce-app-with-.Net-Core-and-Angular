using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser{
                    DisplayName = "Robin",
                    Email = "robin@test.com",
                    UserName = "robin@test.com",
                    Address = new Address{
                        FirstName = "Robin",
                        LastName = "Haider",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        Zipcode = "902120"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}