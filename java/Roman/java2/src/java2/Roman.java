package java2;


	import java.util.HashMap;
	import java.util.Scanner;

	public class Roman {
	    public static void main(String[] args) throws Exception {
	        HashMap<Character, Integer> romanValues = new HashMap<>();
	        romanValues.put('I', 1);
	        romanValues.put('V', 5);
	        romanValues.put('X', 10);
	        romanValues.put('L', 50);
	        romanValues.put('C', 100);
	        romanValues.put('D', 500);
	        romanValues.put('M', 1000);

	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a Roman numeral: ");
	        String input = scanner.nextLine().toUpperCase(); 

	        int result = 0;
	        int previousValue= 0;

	        for (int i = input.length() - 1; i >= 0; i--) {
	            char currentChar = input.charAt(i);
	            int currentValue = romanValues.get(currentChar);

	            if (currentValue < previousValue) {
	                result -= currentValue;
	            } else {
	                result += currentValue;
	            }

	            previousValue = currentValue;
	        }
	        System.out.println(result);
	        scanner.close();
	    }
	}


