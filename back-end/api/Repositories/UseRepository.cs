using System.Collections.Generic;
using System.Linq;
using api.Models;

namespace UseRepository.Repositories
{
  public static class UserRepository
  {
    public static User Get(string email, string password)
    {
      var users = new List<User>();
      users.Add(new User { id = 1, email = "daniel@daniel.com", password = "daniel" });
      return users
              .Where(x => x.email.ToLower() == email.ToLower() && x.password == x.password)
                .FirstOrDefault();
    }
  }
}