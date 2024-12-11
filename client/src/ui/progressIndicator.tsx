export default function ProgressIndicator({ bought, total }: { bought: number, total: number }) {
	return (
		<section className="">
			<div>
				{bought} of {total} items bought
			</div>
		</section>
	);
}