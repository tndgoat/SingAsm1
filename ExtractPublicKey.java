import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.PublicKey;
import java.security.cert.Certificate;

public class ExtractPublicKey {
    public static void main(String[] args) {
        try {
            String keystorePath = "android/app/release.keystore";
            String keystorePassword = "@tndgoat2593";
            String alias = "androidreleasekey";

            KeyStore keystore = KeyStore.getInstance(KeyStore.getDefaultType());
            FileInputStream fis = new FileInputStream(keystorePath);
            keystore.load(fis, keystorePassword.toCharArray());

            Certificate cert = keystore.getCertificate(alias);
            PublicKey publicKey = cert.getPublicKey();

            System.out.println("Public Key: " + publicKey);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
