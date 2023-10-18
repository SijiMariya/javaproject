package java3;


	import java.util.Scanner;

	public class Pangram {
	    public static void main(String[] args) throws Exception {
	         Scanner scanner = new Scanner(System.in);
	        System.out.println("Enter a string to check if it's a pangram:");
	        String input = scanner.nextLine();
	        scanner.close();

	        if (isPangram(input)) {
	            System.out.println("The input string is a pangram.");
	        } else {
	            System.out.println("The input string is not a pangram.");
	        }
	    }
	    public static boolean isPangram(String str) {
	       
	        str = str.replaceAll("[^a-zA-Z]", "").toLowerCase();

	        // Create an array to store whether each letter is present
	        boolean[] alphabet = new boolean[26];

	        for (char c : str.toCharArray()) {
	            if (Character.isLetter(c)) {
	                int index = c - 'a';
	                alphabet[index] = true;
	            }
	        }

	        // Check if all alphabet letters are present
	        for (boolean isPresent : alphabet) {
	            if (!isPresent) {
	                return false;
	            }
	        }

	        return true;
	    }


	}


