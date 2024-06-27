import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.math.BigInteger;

public class ConvertToPEM {
    public static void main(String[] args) {
        try {
            String modulusStr = "24199746122145305148928830805620979882609435237074724284561708111703143091802541853581895233946612559245082497182426617537834143175314403883947146330081277678901676347229320125739876601684079235571057879686627728342316061020526727656799407667624916432342100287700979629011217762838379267789353504914160171373119871698823427624152332807757194984056828221364097141545421313677432746657378332299133537603064392253764629910993393010521813729580773119953297806900680311642331151440089974244802489379377971298036668462925638538803816682919627866421162893205037068091689741600061643371944622685124217063326624087911171731643";
            String exponentStr = "65537";

            // string -> big integer
            BigInteger modulus = new BigInteger(modulusStr);
            BigInteger exponent = new BigInteger(exponentStr);

            // gen RSAPublicKeySpec
            RSAPublicKeySpec spec = new RSAPublicKeySpec(modulus, exponent);
            KeyFactory factory = KeyFactory.getInstance("RSA");
            PublicKey publicKey = factory.generatePublic(spec);

            byte[] encodedPublicKey = publicKey.getEncoded();

            // base64 encryption
            String base64PublicKey = Base64.getEncoder().encodeToString(encodedPublicKey);

            // create PEM format
            String pemPublicKey = "-----BEGIN PUBLIC KEY-----\n";
            pemPublicKey += base64PublicKey.replaceAll("(.{64})", "$1\n");
            pemPublicKey += "\n-----END PUBLIC KEY-----";

            System.out.println(pemPublicKey);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
