package es.us.aws;


public class Song {
	String name = "";
	String autor = "";
	Integer duracion = 0;

	public Song(){
		super();
		name = "";
		autor = "";
		duracion = 0;
	}
	
	public Song(String name, String autor, Integer duracion){
		super();
		this.name = name;
		this.autor = autor;
		this.duracion = duracion;
	}
	
	public String getName(){
		return this.name;
	}
	
	public String getAutor(){
		return this.autor;
	}
	
	public Integer getDuracion(){
		return this.duracion;
	}
	
	public void setName(String newName){
		this.name = newName;
	}
	
	public void setAutor(String newAutor){
		this.autor = newAutor;
	}
	
	public void setDuracion(Integer newDuracion){
		this.duracion = newDuracion;
	}
	@Override
	public String toString() {
		return "Song [name=" + name + ", autor=" + autor + ", duracion="
				+ duracion + "]";
	}

}
