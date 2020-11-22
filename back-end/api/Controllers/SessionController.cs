using System.Collections.Generic;
using System.Linq;
using api.Models;

namespace Sessions.Repositories
{
  public static class UserRepository
  {
    public static User Get(string email, string password)
    {
      var users = new List<User>();
      users.Add(new User { Id = 1, email = "daniel@daniel.com", Password = "daniel" });
      return users
              .Where(x => x.email.ToLower() == email.ToLower() && x.Password == x.Password)
                .FirstOrDefault();
    }
  }
}