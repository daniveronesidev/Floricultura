import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class SistemaLogin {

    private static Map<String, String> usuarios = new HashMap<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Adicione alguns usuários ao mapa (usuário, senha)
        usuarios.put("usuario1", "senha1");
        usuarios.put("usuario2", "senha2");

        System.out.print("Digite o nome de usuário: ");
        String usuario = scanner.nextLine();

        System.out.print("Digite a senha: ");
        String senha = scanner.nextLine();

        if (validarLogin(usuario, senha)) {
            System.out.println("Login bem-sucedido!");
        } else {
            System.out.println("Usuário ou senha incorretos.");
        }
        
        // Aqui você pode chamar o método para adicionar um novo usuário
        adicionarNovoUsuario();
    }

    public static boolean validarLogin(String usuario, String senha) {
        // Verifica se o usuário existe no mapa e a senha corresponde
        return usuarios.containsKey(usuario) && usuarios.get(usuario).equals(senha);
    }

    public static void adicionarNovoUsuario() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o novo nome de usuário: ");
        String novoUsuario = scanner.nextLine();

        System.out.print("Digite a nova senha: ");
        String novaSenha = scanner.nextLine();

        // Adicione o novo usuário ao mapa
        usuarios.put(novoUsuario, novaSenha);

        System.out.println("Novo usuário adicionado com sucesso!");
    }
}
