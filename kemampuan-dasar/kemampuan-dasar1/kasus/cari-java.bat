import java.io.File;
import java.io.IOException;
 
public class MenampilkanFileDirektori {
    
    private static final String DIR = ("C:bahasajavacom");
    
    public static void main(String[] args) {
       
       File file = new File(DIR);
        
       File [] myFiles = file.listFiles();
       System.out.println("$ cari-java.sh $HOME/src);
       System.out.println("Ada file Java pada direktori  " + DIR + " ); 
       //foreach loop
        for(File files : myFiles){
            try {
                System.out.println(files.getCanonicalPath());
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }             
}