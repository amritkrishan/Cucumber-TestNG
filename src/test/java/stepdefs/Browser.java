package stepdefs;

import java.util.LinkedHashMap;
import java.util.Map;

public class Browser {

    //    private volatile static String myBrowser;
    private static Map<Long,String> browserId = new LinkedHashMap<>();

    public static void setBrowser(String browser, Long threadId) {
        browserId.put(threadId,browser);
    }

    public static String getBrowser(Long threadId){
        if(browserId.containsKey(threadId))
            return browserId.get(threadId);
        else
            return null;
    }
}