using System.ComponentModel.DataAnnotations;


namespace api.Models
{
  public class Product
  {
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]

    public string Title { get; set; }

    [MaxLength(250, ErrorMessage = "Este campo deve conter no máximo 1024 caracteres")]

    public string Description { get; set; }

    [MaxLength(999999999, ErrorMessage = "Este campo deve conter no máximo 999999999 caracteres")]

    public string Image { get; set; }


    [Required(ErrorMessage = "Este campo é obrigatório")]

    public decimal Price { get; set; }


    [Range(1, 10000, ErrorMessage = "Máximo de 10000 produtos")]

    public int Stock { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório")]
    [Range(1, int.MaxValue, ErrorMessage = "Categoria inválida")]

    public int CategoryId { get; set; }

    public Category Category { get; set; }

  }
}