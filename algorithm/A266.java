import java.util.HashMap;
import java.util.Map;

public class A266 {
    public static void main(String[] args) {

        String str = "abcdab21124d";
        String result = "";
        char[] chars = str.toCharArray();
        Map<Character, Integer> characterIntegerMap = new HashMap<>();
        for (
                int i = 0;
                i < chars.length; i++) {
            if (!characterIntegerMap.containsKey(chars[i])) {
                characterIntegerMap.put(chars[i], 1);
                result += chars[i];
            } else {
                characterIntegerMap.put(chars[i], characterIntegerMap.get(chars[i]) + 1);
            }
        }

        for (
                Character key : characterIntegerMap.keySet()) {
            System.out.println(key + "-" + characterIntegerMap.get(key));
        }
        System.out.println(result);
    }
}