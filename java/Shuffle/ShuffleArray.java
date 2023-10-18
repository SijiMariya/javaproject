package array;

	import java.util.Arrays;
	import java.util.Collections;
	import java.util.List;
	public class ShuffleArray { 	
		public static void main(String[] args) { 		
			Integer[] Array = { 1, 2, 3, 4, 5, 6, 7 }; 		
	           List<Integer> intList = Arrays.asList(Array); 		
	           Collections.shuffle(intList); 	
	            intList.toArray(Array); 		
	              System.out.println(Arrays.toString(Array));	
	
		}

}
